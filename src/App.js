import React, { Component } from 'react';
import { Cards, Chart, CountryPicker } from './components'
import style from './App.module.css';
import coronaImage from './images/image.png'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadCountries } from './action/country/country-action';
import { loadDataForCountries, loadDailyData } from './action/covid/covid-action';

class App extends Component {
    state = {
        country: '',
    }
    async componentDidMount() {
        this.props.loadCovidData();
        this.props.loadCountries();
        this.props.loadDailyData();
    }

    handleCountryChange = async (country) => {
        this.props.loadCovidData(country);
        this.setState({
            country
        });
    }
    render() {
        const { country } = this.state;
        return (
            <div className={style.container}>
                <img className={style.image} src={coronaImage} alt={"COVID-19"} />
                <Cards data={this.props.covidData} />
                <CountryPicker handleCountryChange={this.handleCountryChange} allCountries={this.props.countries} />
                <Chart data={this.props.covidData} country={country} dailyDataAll={this.props.covidDailyData} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        countries: state.countries,
        covidData: state.covidData,
        covidDailyData: state.covidDailyData
    }
}

const mapDispatchToProps = {
    loadCountries: loadCountries,
    loadCovidData: loadDataForCountries,
    loadDailyData: loadDailyData
}

export default connect(mapStateToProps, mapDispatchToProps)(App);