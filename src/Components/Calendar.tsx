import * as React from 'react';
import dayjs from 'dayjs';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import { StaticDateTimePicker } from '@mui/x-date-pickers/StaticDateTimePicker';

export default function ResponsiveDateTimePickers() {


    const Disable = (date: any) => {
        let blackoutDates = [
            "31/03/2023",
            "20/03/2023",
        ];
        //console.log(date);
        return blackoutDates.includes(dayjs(date).format('DD/MM/YYYY'))
    }

    const test = () => {
      console.log('hey')
    }

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <StaticDateTimePicker defaultValue={dayjs()}
                                  disablePast
                                  shouldDisableDate={Disable}
                                  onAccept={test}
                                  orientation={"landscape"}


            />
        </LocalizationProvider>
    );
}
