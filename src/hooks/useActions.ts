import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { AppDispatch } from '../store';
import { AllActionCreators } from '../store/redusers/action-creators-all';

export const useActions = () => {
  const dispatch = useDispatch<AppDispatch>();
  return bindActionCreators(AllActionCreators, dispatch);
};
