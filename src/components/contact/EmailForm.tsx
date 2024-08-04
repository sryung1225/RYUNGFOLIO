'use client';

import { useState } from 'react';
import ContactType from '@/types/contact';
import sendContactEmail from '@/api/contact';
import styles from '@/styles/components/contact/EmailForm.module.scss';
import Loading from '@/components/common/Loading';
import Alert from './Alert';

const initialContact: ContactType = {
  email: '',
  name: '',
  content: '',
};

export default function EmailForm() {
  const [contact, setContact] = useState<ContactType>(initialContact);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isAlertOpen, setIsAlertOpen] = useState<boolean>(false);
  const [alertMessage, setAlertMessage] = useState<string>('');

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { value, name } = e.target;
    setContact((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendContactEmail({ ...contact });
    setIsLoading(true);
    try {
      await sendContactEmail({ ...contact });
      setAlertMessage('이메일이 성공적으로 전송되었습니다!');
      setIsAlertOpen(true);
      setContact(initialContact);
    } catch (error) {
      setAlertMessage('이메일 전송에 실패했습니다. 잠시 후 다시 시도해주세요.');
    } finally {
      setIsLoading(false);
      setTimeout(() => {
        setIsAlertOpen(false);
      }, 3000);
    }
  };

  return (
    <>
      <form onSubmit={onSubmit} className={styles.form}>
        <label htmlFor="name">
          <span className={styles.label}>이름 / 소속</span>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="☃ ☃ ☃"
            value={contact.name}
            onChange={onChange}
            required
          />
        </label>
        <label htmlFor="email">
          <span className={styles.label}>이메일</span>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="example@email.com"
            value={contact.email}
            onChange={onChange}
            required
          />
        </label>
        <label htmlFor="content" className={styles.content}>
          <span className={styles.label}>내용</span>
          <textarea
            id="content"
            name="content"
            rows={6}
            placeholder="궁금한 내용이 있다면 작성해 주세요 :)"
            value={contact.content}
            onChange={onChange}
            required
          />
        </label>
        <button type="submit" className={styles.submit}>
          메일 보내기
        </button>
      </form>
      {isLoading && <Loading />}
      {isAlertOpen && <Alert message={alertMessage} />}
    </>
  );
}
