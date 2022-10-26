import React from 'react';
import Style from './Footer.module.css';

export default function Footer() {
  return (
    <div className={Style.container}>
      <div className={Style.content}>
        <a className={Style.site} href="https://felipecoutinho.com">FELIPECOUTINHO.COM</a>
        {'|'}
        <a className={Style.github} href="https://github.felipecoutinho.com">GITHUB.FELIPECOUTINHO.COM</a>
      </div>
    </div>
  );
}
