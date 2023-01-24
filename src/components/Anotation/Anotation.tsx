import React from "react";
import '../../styles/anotation.scss';
import anotationIcon from "../../assets/anotation.png";
import { useContext } from 'react';
import TermosContext from "../../contexts/termosContext"

const Anotation: React.FC = () => {

    const { listTermos } = useContext(TermosContext);

    return (
        <div className='anotation-container' >
            <label className="menu-button-wrapper" htmlFor="">
                <input type="checkbox" className="menu-button" />
                <div className="icon-wrapper">
                    <img src={anotationIcon} alt="anotation-icon" />
                </div>
                <div className="item-list">
                    <table className='table-list'>
                        <thead>
                            <tr>
                                <td>
                                    Palavras pesquisadas &nbsp;&nbsp;
                                </td>
                                <td>
                                    &nbsp;&nbsp;Códigos pesquisados
                                </td>
                            </tr>
                        </thead>
                        <tbody data-testid="list-anotation">
                            {
                                listTermos?.map((termo: any, index: number) => {
                                    return (
                                        <tr key={index}>
                                            <td>{termo?.termo}</td>
                                            <td>{termo?.id}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </label >
        </div >
    )
}


export default Anotation;