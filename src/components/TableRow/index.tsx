import React from 'react';
import stylesRow from './TableRow.module.scss';
import { Input } from '../Input';
import styles from '../PatientTable/PatientTable.module.scss';
import { Button } from '../Button';
import editIcon from '../../assets/img/edit.svg';
import trashIcon from '../../assets/img/trash.svg';
import boxIcon from '../../assets/img/box-arrow-up.svg';
import { PatientType } from '../../redux/hospital/types';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import {
  deletePatient,
  editPatient,
  handleDeleteStatusPatient,
} from '../../redux/hospital/asyncActions';
import { Select } from '../Select';
import { DECLARANT } from '../../utils/declarant';
import { addLogMessage } from '../../redux/log/asyncActions';

export const TableRow: React.FC<
  PatientType & { index: number; department: string; date: string }
> = (props) => {
  const [isEdit, setIsEdit] = React.useState<boolean>(false);
  const [patient, setPatient] = React.useState<PatientType>(props);
  const { role, name } = useAppSelector((state) => state.auth.data);
  const dispatch = useAppDispatch();

  const changeHandler = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    setPatient({ ...patient, [event.target.name]: event.target.value });
  };

  const handleChangePermit = () => {
    setPatient({ ...patient, isPermit: !patient.isPermit });
  };

  const onClickDelete = () => {
    dispatch(
      deletePatient({
        date: props.date,
        department: props.department,
        id: patient.id,
      })
    );
    dispatch(
      addLogMessage({
        date: new Date().toLocaleDateString('ru-RU'),
        message: `${name} удалил пациента ${
          patient.name
        }, дата госпитализации ${new Date(props.date).toLocaleDateString(
          'ru-RU'
        )}, отделение: ${props.department}`,
      })
    );
  };
  const onClickHandleDeleteStatusPatient = () => {
    if (!patient.isDelete) {
      dispatch(
        addLogMessage({
          date: new Date().toLocaleDateString('ru-RU'),
          message: `${name} добавил в архив пациента ${
            patient.name
          }, дата госпитализации ${new Date(props.date).toLocaleDateString(
            'ru-RU'
          )}, отделение: ${props.department}`,
        })
      );
    }

    dispatch(
      handleDeleteStatusPatient({
        date: props.date,
        department: props.department,
        id: patient.id,
        isDelete: !patient.isDelete,
      })
    );
  };

  const onClickEdit = () => {
    if (isEdit) {
      dispatch(
        editPatient({
          ...patient,
          date: props.date,
          department: props.department,
        })
      );
    }
    setIsEdit(!isEdit);
  };

  return (
    <tr className={patient.isDelete ? stylesRow.strikeout : ''}>
      <td>{props.index + 1}</td>
      <td>
        {isEdit ? (
          <Input value={patient.name} name="name" onChange={changeHandler} />
        ) : (
          patient.name
        )}
      </td>
      <td>
        {isEdit ? (
          <Select
            value={patient.content}
            name="content"
            onChange={changeHandler}
          >
            <option disabled value="" />
            {Object.entries(DECLARANT).map(([key, val]) => (
              <option key={key} value={val}>
                {val}
              </option>
            ))}
          </Select>
        ) : (
          patient.content
        )}
      </td>
      <td>
        {isEdit ? (
          <Input
            value={patient.direction}
            name="direction"
            onChange={changeHandler}
          />
        ) : (
          patient.direction
        )}
      </td>
      <td>
        {isEdit ? (
          <Input value={patient.mkb} name="mkb" onChange={changeHandler} />
        ) : (
          patient.mkb
        )}
      </td>
      <td>
        {isEdit ? (
          <Input
            value={patient.declarer ? patient.declarer : patient.declarant}
            disabled
          />
        ) : patient.declarer ? (
          patient.declarer
        ) : (
          patient.declarant
        )}
      </td>
      <td>
        <Input
          type="checkbox"
          checked={patient.isPermit}
          name="isPermit"
          onChange={handleChangePermit}
          disabled={!isEdit}
        />
      </td>
      <td>
        {isEdit ? (
          <Input
            value={patient.comment}
            name="comment"
            onChange={changeHandler}
          />
        ) : (
          patient.comment
        )}
      </td>
      <td className={stylesRow.dNone}>
        <div className={styles.buttons}>
          <Button
            disabled={role === 'guest'}
            variant={'outlinePrimary'}
            onClick={
              patient.isDelete ? onClickHandleDeleteStatusPatient : onClickEdit
            }
          >
            {patient.isDelete ? (
              <img src={boxIcon} alt="Box Icon" />
            ) : (
              <img src={editIcon} alt="Edit Icon" />
            )}
          </Button>
          <Button
            disabled={role === 'guest'}
            variant={'outlineDanger'}
            onClick={
              patient.isDelete
                ? onClickDelete
                : onClickHandleDeleteStatusPatient
            }
          >
            <img src={trashIcon} alt="Trash Icon" />
          </Button>
        </div>
      </td>
    </tr>
  );
};
