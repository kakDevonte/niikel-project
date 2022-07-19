import React from 'react';
import styles from './UserPopup.module.scss';
import { useAppDispatch } from '../../redux/store';
import { logout } from '../../redux/auth/asyncActions';
import { useNavigate } from 'react-router-dom';

export const UserPopup: React.FC = () => {
  const [isVisible, setIsVisible] = React.useState<boolean>(false);
  const popupRef = React.useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popupRef.current &&
        !event.composedPath().includes(popupRef.current)
      ) {
        setIsVisible(false);
      }
    };
    document.body.addEventListener('click', handleClickOutside);

    return () => document.body.removeEventListener('click', handleClickOutside);
  }, []);

  const onClickPopup = () => {
    setIsVisible(!isVisible);
  };

  const onClickExit = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <div ref={popupRef}>
      <div className={styles.sortLabel} onClick={onClickPopup}>
        <span>Александр Хатюшин</span>
      </div>
      {isVisible && (
        <div className={styles.sortPopup}>
          <ul>
            <li onClick={onClickExit}>Выход</li>
          </ul>
        </div>
      )}
    </div>
  );
};
