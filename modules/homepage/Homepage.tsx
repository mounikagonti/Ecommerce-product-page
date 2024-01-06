import Image from 'next/image'
import React, {useState} from 'react'
// import 'productImageOne' from '../../public/assets/image-product-1.jpg'
import {HiOutlineShoppingCart} from 'react-icons/hi'
import {FaAngleLeft} from 'react-icons/fa'
import {FaAngleRight} from 'react-icons/fa'
import {url} from 'inspector'

const productImageArray = [
  {
    id: 1,
    url: '/assets/image-product-1-thumbnail.jpg',
    isActive: true,
  },
  {
    id: 2,
    url: '/assets/image-product-2-thumbnail.jpg',
    isActive: false,
  },
  {
    id: 3,
    url: '/assets/image-product-3-thumbnail.jpg',
    isActive: false,
  },
  {
    id: 4,
    url: '/assets/image-product-4-thumbnail.jpg',
    isActive: false,
  },
]

const Homepage = () => {
  const [thumbnailIsTrue, setThumbnailIsTrue] = useState(productImageArray)
  const [count, setCount] = useState<number>(0)

  const handleOnThumbnailClick = (clickedId: number) => {
    const updatedImages = thumbnailIsTrue.map((item) => ({
      ...item,
      isActive: item.id === clickedId,
    }))

    setThumbnailIsTrue(updatedImages) 
  }
  const currentIndex = thumbnailIsTrue?.findIndex((item) => item?.isActive)

  const handleChangeSlide = (position: string) => {
    let calculatedIndex = currentIndex

    if (position === 'left') {
      calculatedIndex -= 1
    } else if (position === 'right') {
      calculatedIndex += 1
    }

    const updatedImages = thumbnailIsTrue?.map((item, index) => ({
      ...item,
      isActive: index === calculatedIndex,
    }))

    setThumbnailIsTrue(updatedImages)
  }

  const mainImage = thumbnailIsTrue?.find((item) => item.isActive)?.url ?? ''

  const handleOnCountClick = (operator: string) => {
    if (operator === 'decrement' && count > 0) {
      setCount((prev) => prev - 1)
    } else if (operator === 'increment') {
      setCount((prev) => prev + 1)
    }
  }

  return (
    <div className='homepage'>
      <div className='homepage_left'>
        <div className='homepage_left_top'>
          <Image
            className='product'
            src={mainImage}
            alt='shoes'
            layout='fill'
            style={{borderRadius: '10px'}}
          />
          <div className='arrow_icons'>
            <button
              onClick={() => handleChangeSlide('left')}
              className='left_arrow'
              disabled={currentIndex === 0}
            >
              <FaAngleLeft />
            </button>
            <button
              className='right_arrow'
              onClick={() => handleChangeSlide('right')}
              disabled={currentIndex === thumbnailIsTrue?.length - 1}
            >
              <FaAngleRight />
            </button>
          </div>
        </div>

        <div className='homepage_left_bottom'>
          {thumbnailIsTrue.map((item: any) => (
            <div
              onClick={() => handleOnThumbnailClick(item?.id)}
              className={
                item?.isActive ? 'img_sample_one_active' : 'img_sample_one'
              }
              key={item?.id}
            >
              <Image
                className={'thumbnail_img'}
                src={item?.url}
                alt='shoes'
                width={80}
                height={80}
                style={{borderRadius: '10px'}}
              />
            </div>
          ))}
          {/* <div className='img_sample_one'>
            <Image
              src={'/assets/image-product-2-thumbnail.jpg'}
              alt='shoes'
              width={80}
              height={80}
              style={{borderRadius: '10px'}}
            />
          </div>
          <div className='img_sample_one'>
            <Image
              src={'/assets/image-product-3-thumbnail.jpg'}
              alt='shoes'
              width={80}
              height={80}
              style={{borderRadius: '10px'}}
            />
          </div>
          <div className='img_sample_one'>
            <Image
              src={'/assets/image-product-4-thumbnail.jpg'}
              alt='shoes'
              width={80}
              height={80}
              style={{borderRadius: '10px'}}
            />
          </div> */}
        </div>
      </div>
      <div className='homepage_right'>
        <div className='sneaker_company'>SNEAKER COMPANY</div>
        <h1>Fall Limited Edition Sneakers</h1>
        <p>
          These low-profile sneakers are perfect casual wear companion.
          Featuring a durable rubber outer sole,they will withstand everything
          the weather can offer.
        </p>
        <div className='price_wrapper'>
          <div className='price'>$125.00</div>
          <div className='discount'>50%</div>
        </div>
        <del className='actual_mrp'>$250.00</del>
        <div className='btn_wrapper'>
          <div className='number_of_products_wrapper'>
            <div
              onClick={() => handleOnCountClick('decrement')}
              className='minus'
            >
              -
            </div>
            <div className='count'>{count}</div>
            <div
              onClick={() => handleOnCountClick('increment')}
              className='plus'
            >
              +
            </div>
          </div>
          <div className='cart_wrapper'>
            <div className='cart'>
              <HiOutlineShoppingCart />
            </div>
            <div className='add_to_cart_btn'>Add to cart</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Homepage
