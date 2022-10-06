import { useEffect } from 'react'
import { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { useForm } from '../hooks/useForm'
import { stayService } from '../services/stay.service'
import { addStay, updateStay, removeStay } from '../store/stay.actions.js'

export const StayEdit = () => {
  const params = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [stay, handleChange, setStay] = useForm(stayService.getEmptyStay())

  const inputRef = useRef()

  useEffect(() => {
    inputRef.current.focus()
    const stayId = params.id
    if (!stayId) return
    stayService
      .getById(stayId)
      .then((stay) => {
        setStay(stay)
      })
      .catch((err) => {
        console.log('err:', err)
      })
  }, [])

  const onSaveStay = (ev) => {
    ev.preventDefault()
    if (stay._id) {
      dispatch(updateStay(stay))
        .then(() => {
          navigate('/')
        })
    } else {
      
      dispatch(addStay(stay))
        .then(() => {
          navigate('/')
        })
    }
  }
  const onRemoveStay = (stayId) => {
    dispatch(removeStay(stayId))
        .then(() => {
          navigate('/')
        })
}

  return (
    <section >
      <h1>{stay._id ? 'Edit' : 'Add'} Stay</h1>
      <div>
      <form className="stay-edit" onSubmit={onSaveStay}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            ref={inputRef}
            value={stay.name}
            onChange={handleChange}
            type="text"
            name="name"
            id="name"
          />
        </div>
        <div>
          <label htmlFor="price">Price:</label>
          <input
            value={stay.price}
            onChange={handleChange}
            type="number"
            name="price"
            id="price"
          />
        </div>
<pre>
  {JSON.stringify(stay, null, 2)}
</pre>
        <button>Save</button>
      </form>
      <button onClick={() => { 
        console.log('stay.id edit',stay._id)
        onRemoveStay(stay._id) }}>❌</button>
      </div>
    </section>
  )
}
