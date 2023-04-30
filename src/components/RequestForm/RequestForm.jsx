import './RequestForm.scss';
import CallbackForm from 'components/CallbackForm';



export const RequestForm = () => {
  return (
    <div className='container section-request__color'>
      <div className='section-request__position'>
      <div className='section-request__photo'/>
      <CallbackForm/>
      </div>
    </div>
  );
};

export default RequestForm;