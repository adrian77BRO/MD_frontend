import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartPulse, faDroplet, faTemperatureHalf } from '@fortawesome/free-solid-svg-icons';

export const CheckupInfo: React.FC = () => {
    return (
        <div className='container pt-5'>
            <div className='row'>
                <div className='col-md-4'>
                    <div className='p-3 rounded-3 cards'>
                        <div className='row'>
                            <div className='col-1'>
                                <div><FontAwesomeIcon icon={faHeartPulse} /></div>
                            </div>
                            <div className='col-11'>
                                <h4>Frecuencia cardiaca</h4>
                                <h6>75 BPM</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className='p-3 rounded-3 cards'>
                        <div className='row'>
                            <div className='col-1'>
                                <div><FontAwesomeIcon icon={faDroplet} /></div>
                            </div>
                            <div className='col-11'>
                                <h4>Saturación de oxígeno</h4>
                                <h6>90 %</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className='p-3 rounded-3 cards'>
                        <div className='row'>
                            <div className='col-1'>
                                <div><FontAwesomeIcon icon={faTemperatureHalf} /></div>
                            </div>
                            <div className='col-11'>
                                <h4>Temperatura corporal</h4>
                                <h6>36 °C</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};