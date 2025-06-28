import React from 'react'
import SearchBar from '../components/SearchBar'
import  ApartmentListings from '../pages/for sale/apartmentListing'
import ApartmentInfo from '../pages/for sale/apartmaentInfo'
export const Apartments = () => {
  return (
    <div>
      <SearchBar />
      <ApartmentListings />
      <ApartmentInfo />
    </div>
  )
}
export default Apartments;