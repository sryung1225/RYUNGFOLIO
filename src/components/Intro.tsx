import styles from "@/styles/components/Intro.module.scss";

export default function Intro() {
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>
        <p>안녕하세요</p>
        <p>항상 더 나은 길을 고민하는</p>
        <p>
          웹 <span className={styles.point_red}>프론트엔드</span> 개발자
        </p>
        <p>
          <span className={styles.point_green}>이성령</span> 입니다
        </p>
      </h2>
    </section>
  );
}
