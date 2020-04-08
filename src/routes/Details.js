import React, { Component } from 'react';
import { Spinner, HeaderDetails, ActorList } from '../components';
import axios from 'axios';
import { API_URL, API_KEY } from '../config';
import { renderLogin } from '../utils/helpers';

const flag = renderLogin();

class Details extends Component {
    state = {
        loading: true,
        actors: [],
        mTitle: '',
        mDesc: '',
        imgSrc: '',
        runtime: '',
        revenue: '',
        status: '',
        vote: '',
        flag: flag
    }
    async componentDidMount() {
        try {
            if(!this.state.flag){
                this.props.history.push({pathname: '/login'});
                return;
            }
            const movieId = this.props.match.params.id;
            const url = `${API_URL}/movie/${movieId}?api_key=${API_KEY}&language=fr`;
            const {
                data: {
                    revenue,
                    runtime,
                    title,
                    overview,
                    status,
                    vote_average,
                    poster_path
                }
            } = await this.loadInfos(url);
            this.setState({
                revenue,
                runtime,
                mTitle: title,
                mDesc: overview,
                status,
                vote: vote_average,
                imgSrc: poster_path
            }, async () => {
                const url = `${API_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=fr`;
                const { data: { cast } } = await this.loadInfos(url);
                this.setState({actors: [...cast], loading: false});
            })
        } catch (e) {
            console.log('e', e)
        }
    }
    loadInfos = url => axios.get(url);
    render() {
        const { loading, actors, mTitle, imgSrc, mDesc, revenue, runtime, status, vote } = this.state;
        return (
            <div className='app'>
                {loading ?
                    (
                        <Spinner />
                    ) :
                    (
                        <>
                            <HeaderDetails
                                mTitle={mTitle}
                                mDesc={mDesc}
                                imgSrc={imgSrc}
                                runtime={runtime}
                                revenue={revenue}
                                status={status}
                                vote={vote}
                            />
                            <ActorList actors={actors} />
                        </>
                    )}
            </div>
        )
    }
}

export { Details }