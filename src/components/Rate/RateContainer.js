import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import RatePost from "./RatePost";
import RateItem from "./RateItem";
import { FaStar } from "react-icons/fa";
import Pagenation from "../Uitilty/Pagenation/Pagenation";
import GetAllReviewHook from "../../hook/review/get-all-review-hook";
import { useParams } from "react-router";

const RateContainer = ({ratAvg,ratQty}) => {
  const { id } = useParams();
  const [dataRate, noPress, countPage] = GetAllReviewHook(id);
  
  return (
    <Container className='rate-container my-4' style={{ backgroundColor: '#fcfcfc' }}>
      <Row>
        <Col className="d-flex mt-2">
          <div className="sub-tile d-inline p-1">التقيمات</div>
          <FaStar className="mt-2" style={{ color: '#f51167', width: '16px', height: '16px' }} />
          <div className="cat-rate d-inline p-1 pt-2">{ratAvg || 0}</div>
          <div className="rate-count d-inline p-1 pt-2">({ratQty || 0} تقييم)</div>
        </Col>
      </Row>
      <RatePost />
      
      {dataRate.data && dataRate.data.length > 0 ? (
        dataRate.data.map((item, index) => (
          <RateItem key={index} rate={item} />
        ))
      ) : (
        <h4 className="mt-3">لا يوجد تعليقات كن أول من يعلق</h4>
      )}

      {countPage > 0 ? (
        <Pagenation noPress={noPress} PageCount={countPage} />
      ) : null}
    </Container>
  );
};

export default RateContainer;
