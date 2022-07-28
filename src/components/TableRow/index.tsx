import React from 'react';
import stylesRow from './TableRow.module.scss';
import { Input } from '../Input';
import styles from '../PatientTable/PatientTable.module.scss';
import { Button } from '../Button';
import editIcon from '../../assets/img/edit.svg';
import trashIcon from '../../assets/img/trash.svg';
import boxIcon from '../../assets/img/box-arrow-up.svg';
import { PatientType } from '../../redux/hospital/types';
import { useAppDispatch } from '../../redux/store';
import {
  editPatient,
  handleDeleteStatusPatient,
} from '../../redux/hospital/asyncActions';

export const TableRow: React.FC<
  PatientType & { index: number; department: string; date: string }
> = (props) => {
  const [isEdit, setIsEdit] = React.useState<boolean>(false);
  const [patient, setPatient] = React.useState<PatientType>(props);
  const dispatch = useAppDispatch();

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPatient({ ...patient, [event.target.name]: event.target.value });
  };

  const handleChangePermit = () => {
    setPatient({ ...patient, isPermit: !patient.isPermit });
  };

  const onClickHandleDeleteStatusPatient = () => {
    console.log(props.date, props.department);
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
          <Input
            value={patient.content}
            name="content"
            onChange={changeHandler}
          />
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
          <Input value={patient.declarer} disabled />
        ) : (
          patient.declarer
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
      <td>
        <div className={styles.buttons}>
          <Button
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
            variant={'outlineDanger'}
            onClick={onClickHandleDeleteStatusPatient}
          >
            <img src={trashIcon} alt="Trash Icon" />
          </Button>
        </div>
      </td>
    </tr>
  );
};
