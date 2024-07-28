import { DATE_PERIODS, NAMES_PERIODS } from 'constants/index';
import { getDaysInMonth, getYears } from 'utils/getDateValues';
import arrow from 'assets/icons/arrow.svg';
import { type PropsDateSelect } from 'types';

import {
  StyledDateSelect,
  StyledDateSelectBtn,
  StyledDateSelectBtnImg,
  StyledDateSelectList,
  StyledDateSelectListItem,
} from './styled';

const DateSelect: React.FC<PropsDateSelect> = ({ type, date, setDate, target, setTarget }) => {
  const { month, year } = date;

  const data =
    type === NAMES_PERIODS.month
      ? DATE_PERIODS.months
      : type === NAMES_PERIODS.day
      ? getDaysInMonth(month, year)
      : getYears(DATE_PERIODS.startYear);

  const handleChoose = (target: string, value: string) => {
    setDate({ ...date, [target]: value });
    setTarget('');
  };

  const handleClick = () => {
    if (target === type) {
      setTarget('');
    } else {
      setTarget(type);
    }
  };

  return (
    <StyledDateSelect>
      <StyledDateSelectBtn type="button" onClick={handleClick}>
        {data.filter((item) => item.id === date[type])[0]?.name || type}
        <StyledDateSelectBtnImg $target={target === type} src={arrow} alt="arrow" />
      </StyledDateSelectBtn>
      {target === type && (
        <StyledDateSelectList>
          {data.map((item) => {
            return (
              <StyledDateSelectListItem key={item.id} onClick={() => handleChoose(target, item.id)}>
                {item.name}
              </StyledDateSelectListItem>
            );
          })}
        </StyledDateSelectList>
      )}
    </StyledDateSelect>
  );
};

export { DateSelect };
