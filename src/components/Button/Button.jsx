import React from 'react';

export default function Button({ title, onClick }) {
  return <button className="Button" onClick={onClick}>{title}</button>;
}
