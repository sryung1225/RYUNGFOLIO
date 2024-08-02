import styles from '@/styles/components/contact/Contact.module.scss';
import EmailForm from './EmailForm';

export default function Contact() {
  return (
    <section className={styles.wrapper}>
      <h2 className="a11yHidden">이메일 보내기</h2>
      <EmailForm />
    </section>
  );
}
