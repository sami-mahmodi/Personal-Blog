import styles from './contact.module.css';
import Image from 'next/image';
import myimg from '../public/images/site/contact.svg'


export default function ContactPage() {
  const imagePath = `/images/site/contact.svg`;
  return(
    <>
      <div className={styles.container}>
    <h1>Contact</h1>
    <div className={styles.divider}>
<form className={styles.form}>
  <input type='text' placeholder='Full Name'/>
  <input type='email' placeholder='Email'/>
  <textarea style={{height:'300px',marginTop:'18px',borderRadius:'8px',padding:'12px',fontSize:'larger'}} placeholder='Your Message!'/>
  <button>Submit</button>
</form>
<Image src={myimg} width={80} height={80} alt='contact image'/>
    </div>
      </div>
    </>
  );
}
