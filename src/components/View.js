import React from 'react';
import './view.css';

export const View = ({applications,deleteApp}) => {
    
    return applications.map(application=>(      
        
        <tr key={application.name}>
            <td>{application.name}</td>
            <td>{application.type}</td>
            <td><button className='ibtn'>Install</button></td>
            <td><button className='dbtn' onClick={()=>deleteApp(application.name)}> Delete</button>
            </td>           
        </tr>            
    
))
}
