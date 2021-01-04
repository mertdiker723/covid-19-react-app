import React, { Component } from 'react';
import { Cards, Chart, CountryPicker } from './components'
import style from './App.module.css';
import { fetchData } from './api/index';
import coronaImage from './images/image.png'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadCountries } from './action/country/country-action'

class App extends Component {
    state = {
        data: {},
        country: '',
    }
    async componentDidMount() {
        const fetchedData = await fetchData();
        this.props.actions.loadCountries();
        this.setState({
            data: fetchedData
        });
    }

    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);
        this.setState({
            data: fetchedData,
            country
        });
    }
    render() {
        const { data, country } = this.state;
        return (
            <div className={style.container}>
                <img className={style.image} src={coronaImage} alt={"COVID-19"} />
                <Cards data={data} />
                <CountryPicker handleCountryChange={this.handleCountryChange} allCountries={this.props.countries} />
                <Chart data={data} country={country} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        countries: state.countries
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: {
            loadCountries: bindActionCreators(loadCountries, dispatch)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);