import React from 'react';
import styles from '../styles/footer_styles.module.css'


function Footer() {
  return (
    <div className={styles.footer}>
      <p>footer</p>
      <a href="https://classes.holbertontulsa.com/software-developer-lpb/?utm_term=holberton&utm_campaign=Branded+%7C+Search&utm_source=adwords&utm_medium=ppc&hsa_acc=2236026088&hsa_cam=12521055298&hsa_grp=123058220150&hsa_ad=514551714616&hsa_src=g&hsa_tgt=kwd-300668487307&hsa_kw=holberton&hsa_mt=p&hsa_net=adwords&hsa_ver=3&gclid=Cj0KCQjwxveXBhDDARIsAI0Q0x2F_v-bYCPiLPfOcw3MgzGG4PrxzfCce8YwrMEHDJyujSFTRqbNABIaAvF7EALw_wcB">Join us!</a>
      <a href="https://www.linkedin.com/in/monty-williams-304943172/">Monty Williams</a>
      <a href="https://www.linkedin.com/in/hayden-cooper-345016247/">Hayden Cooper</a>
    </div>
  )
}
export default Footer;
