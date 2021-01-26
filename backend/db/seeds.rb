# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Favorite.destroy_all
User.destroy_all
Campsite.destroy_all 

response = RestClient.get 'https://developer.nps.gov/api/v1/campgrounds?stateCode=CO&api_key=bmY7DkU6cyIS3Y7U8SivP967Ip3dfoigu939Y48o'
result = JSON.parse response
sites = result["data"]

sites.each do |site|
    Campsite.create(
        name: site["name"], 
        url: site["reservationUrl"], 
        cellPhoneReception: site["amenities"]["cellPhoneReception"],
        showers: site["amenities"]["showers"][0],
        electricalHookups: (site["campsites"]["electricalHookups"]).to_i,
        location: (site["addresses"].map {|address| address["city"]}).uniq.join()
    )
end