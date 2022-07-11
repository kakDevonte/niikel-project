import React from 'react';
import styles from './UserPopup.module.scss';

export const UserPopup: React.FC = () => {
  const [isVisible, setIsVisible] = React.useState<boolean>(false);

  const onClickPopup = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <div className={styles.sortLabel} onClick={onClickPopup}>
        <span>Александр Хатюшин</span>
      </div>
      {isVisible && (
        <div className={styles.sortPopup}>
          <ul>
            <li>Настройки</li>
            <li>Выход</li>
          </ul>
        </div>
      )}
    </div>
  );
};
