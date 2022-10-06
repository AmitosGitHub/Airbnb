import React, { useEffect ,useState} from 'react'
import { connect } from 'react-redux'

import { Link } from 'react-router-dom'
import { StayList } from '../cmps/stay-list'
import { loadStays, addStay, updateStay, removeStay } from '../store/stay.actions.js'
import { showSuccessMsg } from '../services/event-bus.service.js'
import { stayService } from '../services/stay.service.js'
import PulseLoader from "react-spinners/PulseLoader"

function _StayApp({ loadStays, addStay, updateStay, removeStay, stays }) {
    const [isLoading, setIsLoading] = useState(true)
    const loading = true
    useEffect(() => {
        
        setTimeout(() => {
            setIsLoading(!isLoading)
        }, 600)
        loadStays()
    }, [])

    useEffect(() => {
        console.log('isLoading:',isLoading)
    }, [isLoading])

    const onRemoveStay = (stayId) => {
        removeStay(stayId)
    }
   
    if(isLoading) return <section className="sweet-loading">
                                    
                            <PulseLoader
                               color="#99a8a4"
                               margin={7}
                               size={16}
                              />
                            </section>

    return (
        
        <div className='main-layout'>

            {/* <h3>Stays App</h3> */}
            <main className="stay-app">
          
                <div className="stay-list">

                <StayList stays={stays} onRemoveStay={onRemoveStay} />
                   
                </div>
            </main>
        </div>
    )
}


function mapStateToProps(state) {
    return {
        stays: state.stayModule.stays
    }
}
const mapDispatchToProps = {
    loadStays,
    removeStay,
    addStay,
    updateStay,
}


export const StayApp = connect(mapStateToProps, mapDispatchToProps)(_StayApp)