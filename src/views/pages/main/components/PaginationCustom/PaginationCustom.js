import { ChevronLeft, ChevronRight } from 'react-feather'
import {
  Pagination,
  PaginationItem,
  PaginationLink,
  Row,
  Col
} from 'reactstrap'

const PaginationCustom = ({pages, perPage, setPerPage}) => {
  return (
    <>
        <Pagination className='d-flex justify-content-end'>
          <PaginationItem>
            <PaginationLink href='' first>
              <ChevronLeft size={15} /> Trước
            </PaginationLink>
          </PaginationItem>
          {
            
            (pages > 0) ? (
              <PaginationItem active={perPage === (perPage > 3) ? (perPage - 2) : 1}>
                <PaginationLink href='' onClick={() => setPerPage((perPage > 3) ? (perPage - 2) : 1)}>{(perPage > 3) ? (perPage - 2) : 1}</PaginationLink>
              </PaginationItem>
            ) : null
          }
          
          <PaginationItem>
            <PaginationLink href='' first>
              Sau
              <ChevronRight size={15} /> 
            </PaginationLink>
          </PaginationItem>
        </Pagination>
    </>
  )
}
export default PaginationCustom