import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Helmet from 'react-helmet';
import { useParams } from 'react-router-dom'
import { numberFormat } from '../component/numberFormat';

function Details() {
    const { id } = useParams();
    const [productId, setProductId] = useState([]);
    const [nama, setNama] = useState([]);
    const [harga, setHarga] = useState([]);
    const [rating, setRating] = useState([]);
    const [description, setDesc] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getData = async () => {
            axios.get(`http://localhost:5000/products/${id}`)
                .then(response => {
                    setProductId(response.data.products.id);
                    setNama(response.data.products.nama);
                    setHarga(response.data.products.harga);
                    setRating(response.data.products.rating);
                    setDesc(response.data.products.description);
                    setLoading(false);
                })
        }
        getData()
    }, [id])

    const Loading = () => {
        return (
            <div className='d-flex justify-content-center'>
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    }

    const Details = () => {
        return (
            <div className='container Isi mt-3' key={productId.id}>
                <div className='info-details'>
                    <h3>{nama}</h3>
                    <h2>{numberFormat(harga)}</h2>
                    <h2>Rating : {rating}</h2>
                    <h4>{description}</h4>
                </div>
            </div>
        )
    }

    return (
        <div>
            <Helmet>
                <title>
                    Produk Details
                </title>
            </Helmet>
            {
                loading ? <Loading /> : <Details />
            }
        </div>
    );
}

export default Details