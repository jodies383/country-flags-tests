describe('The Country Flags Function', function () {
    describe('Should add a country and flag', function () {
        it('should add Sweden, South Africa, India and China to the list of countries', function () {
            let countryFlags = CountryFlags();
            countryFlags.addCountry('Sweden', '🇸🇪')
            countryFlags.addCountry('South Africa', '🇿🇦')
            countryFlags.addCountry('India', '🇮🇳')
            countryFlags.addCountry('China', '🇨🇳')
            assert.deepEqual(([{
                country: 'Argentina',
                flag: '🇦🇷'
            },
            {
                country: 'Brazil',
                flag: '🇧🇷'
            },
            {
                country: 'Chile',
                flag: '🇨🇱'
            },
            {
                country: 'Zambia',
                flag: '🇿🇲'
            },
            {
                country: 'Uganda',
                flag: '🇺🇬'
            },
            {
                country: 'Malawi',
                flag: '🇲🇼'
            },
            {
                country: 'Rwanda',
                flag: '🇷🇼'
            },
            {
                country: 'Ireland',
                flag: '🇮🇪'
            },
            {
                country: 'Switzerland',
                flag: '🇨🇭'
            },
            {
                country: 'Sweden',
                flag: '🇸🇪'
            },
            {
                country: 'South Africa',
                flag: '🇿🇦'
            },
            {
                country: 'India',
                flag: '🇮🇳'
            },
            {
                country: 'China',
                flag: '🇨🇳'
            }
            ]), countryFlags.returnCountries());
        });
    });

    describe('Should return the country that was entered in the search box', function () {
        it('should return Brazil', function () {
            let countryFlags = CountryFlags();
            assert.deepEqual(countryFlags.searchCountries('brazil'), [{ country: 'Brazil', flag: '🇧🇷' }]);
        });
        it('should return Zambia', function () {
            let countryFlags = CountryFlags();
            assert.deepEqual(countryFlags.searchCountries('zambia'), [{ country: 'Zambia', flag: '🇿🇲' }]);
        });
    });
    describe('Should sort countries alphabetically', function () {
        it('should return the list of countries in alphabetical order', function () {
            let countryFlags = CountryFlags();
            countryFlags.sortCountries()
            assert.deepEqual(([{
                country: 'Argentina',
                flag: '🇦🇷'
            },
            {
                country: 'Brazil',
                flag: '🇧🇷'
            },
            {
                country: 'Chile',
                flag: '🇨🇱'
            },
            {
                country: 'China',
                flag: '🇨🇳'
            },
            {
                country: 'India',
                flag: '🇮🇳'
            },
            {
                country: 'Ireland',
                flag: '🇮🇪'
            },
            {
                country: 'Malawi',
                flag: '🇲🇼'
            },
            {
                country: 'Rwanda',
                flag: '🇷🇼'
            },
            {
                country: 'South Africa',
                flag: '🇿🇦'
            },
            {
                country: 'Sweden',
                flag: '🇸🇪'
            },
            {
                country: 'Switzerland',
                flag: '🇨🇭'
            },
            {
                country: 'Uganda',
                flag: '🇺🇬'
            },
            {
                country: 'Zambia',
                flag: '🇿🇲'
            }
            ]), countryFlags.returnCountries());
        });
    });
    describe('Should return error messages', function () {
        it('should return the message "Please add a valid country and flag" since there was no country or flag added', function () {
            let countryFlags = CountryFlags();
            assert.deepEqual(countryFlags.addCountry('', ''), ('Please add a valid country and flag'));
        });
        it('should return the message "Country or flag has already been added" since a duplicate Country has been entered', function () {
            let countryFlags = CountryFlags();          
            assert.deepEqual(countryFlags.addCountry('Uganda', '🇺🇬'), ('Country or flag has already been added'));
        });
        it('should return the message "Please add a valid country and flag" since the Country or flag entered does not pass the regex', function () {
            let countryFlags = CountryFlags();          
            assert.deepEqual(countryFlags.addCountry('!"#', '098'), ('Please add a valid country and flag'));
        });
    });
});
