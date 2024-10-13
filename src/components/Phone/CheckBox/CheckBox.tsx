import React from 'react';
import './CheckBox.css';

interface CheckBoxProps {
  onGenderChange: (gender: 'male' | 'female' | 'unknown', checked: boolean) => void;
}

export const CheckBox: React.FC<CheckBoxProps> = ({ onGenderChange }) => {
  return (
    <div className='cont'>
      <label>
        <input
          type="checkbox"
          onChange={(e) => onGenderChange('male', e.target.checked)}
        />
        <p className='male'>male</p>
      </label>

      <label>
        <input
          type="checkbox"
          onChange={(e) => onGenderChange('female', e.target.checked)}
        />
        <p className='female'>female</p>
      </label>

      <label>
        <input
          type="checkbox"
          onChange={(e) => onGenderChange('unknown', e.target.checked)}
        />
        <p className='unknown'>unknown</p>
      </label>
    </div>
  );
};