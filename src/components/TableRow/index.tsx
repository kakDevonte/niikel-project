import React, { ChangeEvent } from 'react';
import { Input } from '../Input';
import styles from '../PatientTable/PatientTable.module.scss';
import { Button } from '../Button';
import editIcon from '../../assets/img/edit.svg';
import trashIcon from '../../assets/img/trash.svg';

type PatientType = {
  id: number;
  name: string;
  contingent: string;
  profile: string;
  declarer: string;
  isAdmit: string;
  comment: string;
};

export const TableRow: React.FC<PatientType> = (props) => {
  const [isEdit, setIsEdit] = React.useState<boolean>(false);
  const [patient, setPatient] = React.useState<PatientType>(props);

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPatient({ ...patient, [event.target.name]: event.target.value });
  };

  return (
    <tr>
      <td>{patient.id}</td>
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
            value={patient.contingent}
            name="contingent"
            onChange={changeHandler}
          />
        ) : (
          patient.contingent
        )}
      </td>
      <td>
        {isEdit ? (
          <Input
            value={patient.profile}
            name="profile"
            onChange={changeHandler}
          />
        ) : (
          patient.profile
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
        {isEdit ? (
          <Input
            value={patient.isAdmit}
            name="isAdmit"
            onChange={changeHandler}
          />
        ) : (
          patient.isAdmit
        )}
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
          <Button variant={'outlinePrimary'} onClick={() => setIsEdit(!isEdit)}>
            <img src={editIcon} alt="Edit Icon" />
          </Button>
          <Button variant={'outlineDanger'}>
            <img src={trashIcon} alt="Trash Icon" />
          </Button>
        </div>
      </td>
    </tr>
  );
};
