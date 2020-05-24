import React, { useContext } from 'react';
import AlertContext from '../../context/alert/AlertContext';

const Alerts = () => {
  const alertContext = useContext(AlertContext);

  return (
    alertContext.alerts.length > 0 &&
    alertContext.alerts.map(alert => (
      <div className="container has-rem-margin-top-2" key={alert.id}>
        <div className="columns is-centered">
          <div
            className={`box has-background-${alert.type || 'info'} column is-8`}
          >
            <span className="icon has-text-white">
              <i className="fas fa-info-circle" />
            </span>
            <span className="subtitle is-6 has-text-white">{alert.msg}</span>
          </div>
        </div>
      </div>
    ))
  );
};

export default Alerts;
