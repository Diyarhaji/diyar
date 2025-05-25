import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { useTranslation } from 'react-i18next';

const MyComponent = () => {
  const el = useRef(null);
  const typedInstance = useRef(null);
  const { t } = useTranslation();

  useEffect(() => {
    typedInstance.current = new Typed(el.current, {
      strings: [t('role1'), t('role2'), t('role3')],
      typeSpeed: 70,
      backSpeed: 70,
      loop: true,
    });

    // Cleanup on unmount
    return () => {
      typedInstance.current.destroy();
    };
  }, [t]); // re-run when language changes

  return (
    <span className="text-fourth text-2xl" ref={el}></span>
  );
};

export default MyComponent;
