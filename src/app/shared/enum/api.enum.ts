export enum API {
  ALL_DATA = 'https://api.spacexdata.com/v3/launches?limit=100',
  LAUNCH_SUCCESS = 'https://api.spacexdata.com/v3/launches?limit=100&amp;launch_success=true',
  LAUNCH_LAND_SUCCESS = 'https://api.spacexdata.com/v3/launches?limit=100&amp;launch_success=true&amp;land_success=true',
  ALL_FILTERS = 'https://api.spacexdata.com/v3/launches?limit=100&amp;launch_success=true&amp;land_success=true&amp;launch_year=2014'
}
