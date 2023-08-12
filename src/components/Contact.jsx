import { useRef, useState, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const formRef = useRef()
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { target } = e
    const { name, value } = target

    setForm({
      ...form,
      [name]: value,
    })
  }


     const templateParams = {
      from_name: form.name,
      email: form.email,
      subject: "costumer message",
      description: form.message,
    };

    // emailjs
    //   .send(
    //     "service_714sd0j",
    //     "template_uuco2rq",
    //     templateParams,
    //     "jKyrOlP3iZ70djF8G"
    //   )

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    emailjs.send(
      'service_714sd0j', // service_714sd0j
      'template_uuco2rq',  // template_uuco2rq
      {
        from_name: form.name,
        to_name: 'Hebertt',
        from_email: form.email,
        to_email: 'heberttaferreira.com@gmail.com',
        message: form.message,
      },
      'jKyrOlP3iZ70djF8G' // 
    ).then(
        () => {
          setLoading(false)
          alert('Thanks! I will get back to you soon.')

          setForm({
            name: '',
            email: '',
            message: '',
          })
        },
        (error) => {
          setLoading(false)
          console.error(error)

          alert('Oops, something went wrong. Please try again.')
        }
      )
  }

  // FRAMER MOTION
  const contactVariants = {
    visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
    hidden: { opacity: 0, scale: 0 },
  }
  const controls = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  return (
    <section className='w-full h-full relative flex flex-col justify-center items-center overflow-hidden mt-20'>
      <motion.div
        ref={ref}
        animate={controls}
        initial='hidden'
        variants={contactVariants}
        className='border-2 w-[98%] md:w-[60%] xl:w-[40%] text-center transparent-glass-background py-8 px-4 rounded-3xl glowing-shadow  mt-20 mb-10'>
        <h1 className=' header-text-glow fredoka-font text-5xl lg:text-7xl text-white  '>
          C<span className=' light-blue-text font-semibold '>on</span>t
          <span className=' light-blue-text font-semibold '>act</span>
        </h1>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'>
          <label className='flex flex-col'>
            <span className='text-white mb-4 font-bold'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className='border-2 form-field-color py-4 px-6 text-white
               rounded-lg outline-none  font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-bold- mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className='border-2 form-field-color text-white py-4 px-6 rounded-lg outline-none  font-medium'></input>
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='Please leave your message...'
              className='border-2 form-field-color py-4 px-6 text-white rounded-lg outline-none  font-medium'></textarea>
          </label>
          <button
            type='submit'
            className='border-2 hover-glowing-shadow-and-scale py-3 px-8 rounded-xl outline-none w-fit text-white font-bold'>
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </motion.div>
    </section>
  )
}

export default Contact