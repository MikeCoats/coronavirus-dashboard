// @flow

import React from 'react';
import type { ComponentType } from 'react';

import type { Props } from './About.types';
import * as Styles from './About.styles';
import PageTitle from 'components/PageTitle';

const About: ComponentType<Props> = ({}: Props) => {
  return (
    <Styles.Container className="govuk-width-container">
      <PageTitle title="About the data" />
      <Styles.SectionHeader className="govuk-heading-m">Case count data</Styles.SectionHeader>
      <Styles.Body className="govuk-body">
        Tests for COVID-19 are performed by laboratories around the UK.  The processes for reporting are carried out separately for England, Scotland, Wales and Northern Ireland.  The overall UK daily and cumulative counts are aggregated by the Department for Health and Social Care (DHSC) from the counts for the four countries, and submitted to PHE to display on the dashboard.
        <br/>
        <br/>
        The Government's mass testing programme consists of five "pillars".  The overall UK case counts include test results from pillars 1 and 2.  All other counts on the dashboard include only results from pillar 1.  Pillar 1 includes tests carried out by NHS and PHE labs (and equivalent in the devolved administrations).  Pillar 2 is testing by commercial partners.  Information about the different pillars is available <a href="https://www.gov.uk/government/publications/coronavirus-covid-19-scaling-up-testing-programmes/coronavirus-covid-19-scaling-up-our-testing-programmes" target="_blank" rel="noopener noreferrer">here</a>.
        <br/>
        <br/>
        Details of the processes for assembling numbers of cases in the Devolved Administrations are available on their websites:
        <br/>
        <a href="https://www.gov.scot/coronavirus-covid-19/" target="_blank" rel="noopener noreferrer">Scotland</a>
        <br/>
        <a href="https://covid19-phwstatement.nhs.wales/" target="_blank" rel="noopener noreferrer">Wales</a>
        <br/>
        <a href="https://www.publichealth.hscni.net/publications/covid-19-surveillance-reports" target="_blank" rel="noopener noreferrer">Northern Ireland</a>
        <br/>
        <br/>
        In England, the results of tests are submitted by the laboratories to PHE through the Second Generation Surveillance System (SGSS).  Cases received from laboratories by 00:30 are included in the counts published that day.  Confirmed positive cases are matched to ONS geographical area codes using the home postcode of the person tested, as supplied by the laboratory information systems.  Duplicate tests for the same person are removed.  Cases are aggregated to Upper Tier Local Authority (UTLA) and Region level and presented in the table and on the map.  Some cases cannot be matched to a geographical area due to absence or delayed receipt of postcode information – hence the UTLA and Region counts do not sum to the England total.  Cumulative case counts include patients who are currently unwell, those have recovered and those that have died.  Total published counts for individual UTLAs can occasionally go down from one day to the next as data are further revised.  Any cases in people who have not been tested are not included in the confirmed case counts.
        <br/>
        <br/>
        For the time series case count data shown for England in the charts and tables, and available to download for Regions and UTLAs, the lab-confirmed positive cases are allocated to the day the first specimen was taken.  Each day new cases are reported, but the dates from which they originate cover the previous few days.  Hence there are few cases reported for the most recent date on the chart, but this does not mean the epidemic is tailing off – the cases for any day will build over the next few days.  Data for the most recent five days should always be considered incomplete.  The data are constantly being revised, so data for previous days will change as data are revised. These are currently only available for England on this dashboard: data for the rest of the UK will be included as soon as possible. </Styles.Body>
      <Styles.SectionHeader className="govuk-heading-m">Death count data</Styles.SectionHeader>
      <Styles.Body className="govuk-body">
        The processes for reporting deaths are also carried out separately for England, Scotland, Wales and Northern Ireland.  The overall UK daily and cumulative counts are aggregated by DHSC from the counts for the four countries, and submitted to PHE to display on the dashboard.  The four component figures are not all taken from the same cut-off time each day: England and Wales counts are as at 17:00 the day before publication; Scotland counts are as at 09:00 the day before publication; Northern Ireland counts are as at 09:15 the day before publication.
        <br/>
        <br/>
        Details of the processes for assembling numbers of cases in the Devolved Administrations are available on their websites – links provided above.
        <br/>
        <br/>
        The figures currently shown for England are deaths in NHS-commissioned services of patients who have had a positive test result for COVID-19. These are reported by the services to NHS England.  NHS England extracts data at 17:00 each day and these are the basis for the death counts reported in the dashboard the following day.  Following validation, the total number of deaths in England is published by NHS England and sent to DHSC.  Deaths outside NHS services are not currently included in these counts.  Deaths of people who have had a positive test for COVID-19 could in some cases be due to a different cause.
        <br/>
        <br/>
        The time series charts and tables for deaths show deaths according to the day they were reported, not the day they occurred.
      </Styles.Body>
      <Styles.SectionHeader className="govuk-heading-m">Interpreting the maps</Styles.SectionHeader>
      <Styles.Body className="govuk-body">
        The maps show counts of cases in each Country, Region and Upper Tier Local Authority (UTLA) area.  The areas of the circles on the map are proportional to the counts.  UTLAs include counties and unitary authorities and vary enormously in population, from under 100,000 to over 1.4 million.  Areas with larger populations would naturally have higher numbers of cases, even if the cases were completely evenly distributed around the country. In order to compare the numbers of cases between areas meaningfully it is necessary to calculate rates, but the comparisons would not have been robust when the numbers of cases in each area were small – rates will be shown as soon as possible.
        <br/>
        <br/>
        Updated 14:10 14/04/2020
        <br/>
        <br/>
        Metadata developed with advice from the UK Statistics Authority
      </Styles.Body>
    </Styles.Container>
  );
};

export default About;
