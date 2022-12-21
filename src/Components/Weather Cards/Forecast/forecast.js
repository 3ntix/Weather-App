import {
  Accordion,
  AccordionItemHeading,
  AccordionItem,
  AccordionItemPanel,
  AccordionItemButton,
} from "react-accessible-accordion";

import "./forecast.css";

const WEEK_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const Forecast = ({ data }) => {
  const dayInAWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInAWeek)
  );

  return (
    <>
      <div>
        <label className="title">Daily</label>
      </div>
      <div div className="accordion">
        <>
          <Accordion allowZeroExpanded>
            {data.list.slice(0, 1).map((item, idx) => (
              <AccordionItem key={idx}>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <div className="daily-item">
                      <label className="day">{forecastDays[idx]}</label>
                      <img
                        alt="weather"
                        className="icon-small"
                        src={`icons/${item.weather[0].icon}.png`}
                      />
                      <label className="description">
                        {item.weather[0].description}
                      </label>
                      <label className="min-max">
                        {Math.round(item.main.temp_min)}ºC /{" "}
                        {Math.round(item.main.temp_max)}ºC
                      </label>
                    </div>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <div className="daily-details-grid">
                    <div className="daily-details-grid-item">
                      <label>Pressure</label>
                      <label>{item.main.pressure}Pa</label>
                    </div>
                    <div className="daily-details-grid-item">
                      <label>Humidity</label>
                      <label>{item.main.humidity}%</label>
                    </div>
                    <div className="daily-details-grid-item">
                      <label>Clouds</label>
                      <label>{item.clouds.all}%</label>
                    </div>
                    <div className="daily-details-grid-item">
                      <label>Wind Speed:</label>
                      <label>{item.wind.speed}m/s</label>
                    </div>
                    <div className="daily-details-grid-item">
                      <label>Sea Level:</label>
                      <label>{item.main.sea_level}m</label>
                    </div>
                    <div className="daily-details-grid-item">
                      <label>Feels Like:</label>
                      <label>{item.main.feels_like}ºC</label>
                    </div>
                  </div>
                </AccordionItemPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </>
      </div>
      <div className="accordion">
        <>
          <Accordion allowZeroExpanded>
            {data.list.slice(1, 2).map((item, idx) => (
              <AccordionItem key={idx}>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <div className="daily-item">
                      <label className="day">{forecastDays[idx + 1]}</label>
                      <img
                        alt="weather"
                        className="icon-small"
                        src={`icons/${item.weather[0].icon}.png`}
                      />
                      <label className="description">
                        {item.weather[0].description}
                      </label>
                      <label className="min-max">
                        {Math.round(item.main.temp_min)}ºC /{" "}
                        {Math.round(item.main.temp_max)}ºC
                      </label>
                    </div>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <div className="daily-details-grid">
                    <div className="daily-details-grid-item">
                      <label>Pressure</label>
                      <label>{item.main.pressure}Pa</label>
                    </div>
                    <div className="daily-details-grid-item">
                      <label>Humidity</label>
                      <label>{item.main.humidity}%</label>
                    </div>
                    <div className="daily-details-grid-item">
                      <label>Clouds</label>
                      <label>{item.clouds.all}%</label>
                    </div>
                    <div className="daily-details-grid-item">
                      <label>Wind Speed:</label>
                      <label>{item.wind.speed}m/s</label>
                    </div>
                    <div className="daily-details-grid-item">
                      <label>Sea Level:</label>
                      <label>{item.main.sea_level}m</label>
                    </div>
                    <div className="daily-details-grid-item">
                      <label>Feels Like:</label>
                      <label>{item.main.feels_like}ºC</label>
                    </div>
                  </div>
                </AccordionItemPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </>
      </div>
      <div className="accordion">
        <>
          <Accordion allowZeroExpanded>
            {data.list.slice(2, 3).map((item, idx) => (
              <AccordionItem key={idx}>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <div className="daily-item">
                      <label className="day">{forecastDays[idx + 2]}</label>
                      <img
                        alt="weather"
                        className="icon-small"
                        src={`icons/${item.weather[0].icon}.png`}
                      />
                      <label className="description">
                        {item.weather[0].description}
                      </label>
                      <label className="min-max">
                        {Math.round(item.main.temp_min)}ºC /{" "}
                        {Math.round(item.main.temp_max)}ºC
                      </label>
                    </div>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <div className="daily-details-grid">
                    <div className="daily-details-grid-item">
                      <label>Pressure</label>
                      <label>{item.main.pressure}Pa</label>
                    </div>
                    <div className="daily-details-grid-item">
                      <label>Humidity</label>
                      <label>{item.main.humidity}%</label>
                    </div>
                    <div className="daily-details-grid-item">
                      <label>Clouds</label>
                      <label>{item.clouds.all}%</label>
                    </div>
                    <div className="daily-details-grid-item">
                      <label>Wind Speed:</label>
                      <label>{item.wind.speed}m/s</label>
                    </div>
                    <div className="daily-details-grid-item">
                      <label>Sea Level:</label>
                      <label>{item.main.sea_level}m</label>
                    </div>
                    <div className="daily-details-grid-item">
                      <label>Feels Like:</label>
                      <label>{item.main.feels_like}ºC</label>
                    </div>
                  </div>
                </AccordionItemPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </>
      </div>
      <div className="accordion">
        <>
          <Accordion allowZeroExpanded>
            {data.list.slice(3, 4).map((item, idx) => (
              <AccordionItem key={idx}>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <div className="daily-item">
                      <label className="day">{forecastDays[idx + 3]}</label>
                      <img
                        alt="weather"
                        className="icon-small"
                        src={`icons/${item.weather[0].icon}.png`}
                      />
                      <label className="description">
                        {item.weather[0].description}
                      </label>
                      <label className="min-max">
                        {Math.round(item.main.temp_min)}ºC /{" "}
                        {Math.round(item.main.temp_max)}ºC
                      </label>
                    </div>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <div className="daily-details-grid">
                    <div className="daily-details-grid-item">
                      <label>Pressure</label>
                      <label>{item.main.pressure}Pa</label>
                    </div>
                    <div className="daily-details-grid-item">
                      <label>Humidity</label>
                      <label>{item.main.humidity}%</label>
                    </div>
                    <div className="daily-details-grid-item">
                      <label>Clouds</label>
                      <label>{item.clouds.all}%</label>
                    </div>
                    <div className="daily-details-grid-item">
                      <label>Wind Speed:</label>
                      <label>{item.wind.speed}m/s</label>
                    </div>
                    <div className="daily-details-grid-item">
                      <label>Sea Level:</label>
                      <label>{item.main.sea_level}m</label>
                    </div>
                    <div className="daily-details-grid-item">
                      <label>Feels Like:</label>
                      <label>{item.main.feels_like}ºC</label>
                    </div>
                  </div>
                </AccordionItemPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </>
      </div>
      <div className="accordion">
        <>
          <Accordion allowZeroExpanded>
            {data.list.slice(4, 5).map((item, idx) => (
              <AccordionItem key={idx}>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <div className="daily-item">
                      <label className="day">{forecastDays[idx + 4]}</label>
                      <img
                        alt="weather"
                        className="icon-small"
                        src={`icons/${item.weather[0].icon}.png`}
                      />
                      <label className="description">
                        {item.weather[0].description}
                      </label>
                      <label className="min-max">
                        {Math.round(item.main.temp_min)}ºC /{" "}
                        {Math.round(item.main.temp_max)}ºC
                      </label>
                    </div>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <div className="daily-details-grid">
                    <div className="daily-details-grid-item">
                      <label>Pressure</label>
                      <label>{item.main.pressure}Pa</label>
                    </div>
                    <div className="daily-details-grid-item">
                      <label>Humidity</label>
                      <label>{item.main.humidity}%</label>
                    </div>
                    <div className="daily-details-grid-item">
                      <label>Clouds</label>
                      <label>{item.clouds.all}%</label>
                    </div>
                    <div className="daily-details-grid-item">
                      <label>Wind Speed:</label>
                      <label>{item.wind.speed}m/s</label>
                    </div>
                    <div className="daily-details-grid-item">
                      <label>Sea Level:</label>
                      <label>{item.main.sea_level}m</label>
                    </div>
                    <div className="daily-details-grid-item">
                      <label>Feels Like:</label>
                      <label>{item.main.feels_like}ºC</label>
                    </div>
                  </div>
                </AccordionItemPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </>
      </div>
    </>
  );
};

export default Forecast;
