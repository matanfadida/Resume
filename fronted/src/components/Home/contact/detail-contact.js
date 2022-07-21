
import { UilMobileAndroid } from "@iconscout/react-unicons";
import { UilEnvelopeAlt } from "@iconscout/react-unicons";
import { UilMapMarker } from "@iconscout/react-unicons";

import style from './detail-contact.module.css';

const DetailContact = () => {
  return (
    <div className={style.box}>
      <div className={style.detail}>
        <i className={style.icon}>
          <UilMobileAndroid />
        </i>
        <div>
          <h3 className={style.title}>Phone</h3>
          <br />
          <span className={style.subtitle}>052-5305623</span>
        </div>
      </div>
      <div className={style.detail}>
        <i className={style.icon}>
          <UilEnvelopeAlt />
        </i>
        <div>
          <h3 className={style.title}>Email</h3>
          <br />
          <span className={style.subtitle}>matanfadida7@gmail.com</span>
        </div>
      </div>
      <div className={style.detail}>
        <i className={style.icon}>
          <UilMapMarker />
        </i>
        <div>
          <h3 className={style.title}>Location</h3>
          <br />
          <span className={style.subtitle}>Be'er Sheva - Israel</span>
        </div>
      </div>
    </div>
  );
};

export default DetailContact;
