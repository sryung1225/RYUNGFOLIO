import styles from "@/styles/components/Intro.module.scss";

export default function Intro() {
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>
        안녕하세요
        <br />
        항상 더 나은 길을 고민하는
        <br />웹 <span className={styles.point_red}>프론트엔드</span> 개발자
        <br />
        <span className={styles.point_green}>이성령</span> 입니다
      </h2>
    </section>
  );
}
