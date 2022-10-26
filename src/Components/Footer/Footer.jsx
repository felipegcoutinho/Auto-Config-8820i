import React from 'react';
import Style from './Footer.module.css';

export default function header() {
  return (
    <div className={Style.container}>
      <div className={Style.content}>
        <a className={Style.site} href="#">FELIPECOUTINHO.COM</a>
        {'|'}
        <a className={Style.github} href="#">GITHUB.FELIPECOUTINHO.COM</a>
      </div>
    </div>
  );
}
