require "test_helper"

class CampsitesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @campsite = campsites(:one)
  end

  test "should get index" do
    get campsites_url, as: :json
    assert_response :success
  end

  test "should create campsite" do
    assert_difference('Campsite.count') do
      post campsites_url, params: { campsite: { cellPhoneReception: @campsite.cellPhoneReception, electricalHookups: @campsite.electricalHookups, location: @campsite.location, name: @campsite.name, showers: @campsite.showers, url: @campsite.url } }, as: :json
    end

    assert_response 201
  end

  test "should show campsite" do
    get campsite_url(@campsite), as: :json
    assert_response :success
  end

  test "should update campsite" do
    patch campsite_url(@campsite), params: { campsite: { cellPhoneReception: @campsite.cellPhoneReception, electricalHookups: @campsite.electricalHookups, location: @campsite.location, name: @campsite.name, showers: @campsite.showers, url: @campsite.url } }, as: :json
    assert_response 200
  end

  test "should destroy campsite" do
    assert_difference('Campsite.count', -1) do
      delete campsite_url(@campsite), as: :json
    end

    assert_response 204
  end
end
