'use client';

import { useState } from 'react';
import sendContactEmail from '@/api/contact';
import ContactType from '@/types/contact';

const initialContact: ContactType = {
  email: '',
  name: '',
  content: '',
};

export default function EmailForm() {
  const [contact, setContact] = useState<ContactType>(initialContact);

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { value, name } = e.target;
    setContact((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendContactEmail({ ...contact });
  };

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="name">
        <span className="a11yHidden">이름 / 소속</span>
        <input
          id="name"
          type="text"
          name="name"
          placeholder="이름 / 소속"
          value={contact.name}
          onChange={onChange}
          required
        />
      </label>
      <label htmlFor="email">
        <span className="a11yHidden">보내는 사람 이메일</span>
        <input
          id="email"
          type="text"
          name="email"
          placeholder="이메일"
          value={contact.email}
          onChange={onChange}
          required
        />
      </label>
      <label htmlFor="message">
        <span className="a11yHidden">문의할 내용</span>
        <textarea
          id="message"
          name="message"
          rows={10}
          placeholder="문의 내용을 작성해주세요."
          value={contact.name}
          onChange={onChange}
          required
        />
      </label>
      <button type="submit">메일 보내기</button>
    </form>
  );
}
