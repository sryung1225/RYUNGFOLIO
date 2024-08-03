import styles from '@/styles/components/contact/Contact.module.scss';
import EmailForm from './EmailForm';

export default function Contact() {
  return (
    <section className={styles.wrapper}>
      <h2 className="a11yHidden">메세지 보내기</h2>
      <h3 className={styles.headline}>
        저와 나누고 싶은 이야기가 있다면 <br />
        편하게 메세지 남겨주세요.
      </h3>
      <p className={styles.subheadline}>
        여러 사람을 만나고 함께 일해보고 싶습니다. <br />
        메일을 보내주시면 확인 후 1-2일 내로 답장 드리겠습니다.
      </p>
      <EmailForm />
    </section>
  );
}
