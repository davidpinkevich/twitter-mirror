import { useEffect, useState } from 'react';

import { NAMES_PERIODS } from 'constants/index';
import { type PropsDateFilters } from 'types';

import { DateSelect } from './DateSelect';
import {
  StyledDateFilters,
  StyledDateFiltersInfo,
  StyledDateFiltersItems,
  StyledDateFiltersTitle,
} from './styled';

const DateFilters: React.FC<PropsDateFilters> = ({ date, setDate, disabled }) => {
  const [target, setTarget] = useState('');

  const handleOutsideClick = (event: MouseEvent) => {
    const wrapper = document.querySelector('.close_tooltip');
    if (wrapper && !wrapper.contains(event.target as Node)) {
      setTarget('');
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <StyledDateFilters className="close_tooltip">
      <StyledDateFiltersTitle>Date of birth</StyledDateFiltersTitle>
      <StyledDateFiltersInfo>
        This information will not be publicly available. Verify your age, even if this account is
        for a company, home kitchen, etc.
      </StyledDateFiltersInfo>
      <StyledDateFiltersItems $disabled={disabled}>
        <DateSelect
          type={NAMES_PERIODS.month}
          date={date}
          setDate={setDate}
          target={target}
          setTarget={setTarget}
        />
        <DateSelect
          type={NAMES_PERIODS.day}
          date={date}
          setDate={setDate}
          target={target}
          setTarget={setTarget}
        />
        <DateSelect
          type={NAMES_PERIODS.year}
          date={date}
          setDate={setDate}
          target={target}
          setTarget={setTarget}
        />
      </StyledDateFiltersItems>
    </StyledDateFilters>
  );
};

export { DateFilters };
