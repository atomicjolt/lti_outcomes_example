class Api::OutcomesController < ApplicationController

  include Concerns::JwtToken

  before_action :validate_token

  respond_to :json

  def create

    tp_params = {
      'lis_outcome_service_url' => params[:lis_outcome_service_url],
      'lis_result_sourcedid' => params[:lis_result_sourcedid],
      'user_id' => params[:lms_user_id]
    }

    provider = IMS::LTI::ToolProvider.new(
      current_lti_application_instance.lti_key,
      current_lti_application_instance.lti_secret,
      tp_params
    )

    response = provider.post_replace_result!(params[:score])

    if response.success?
      # grade write worked
      render json: { success: true }
    elsif response.processing?

    elsif response.unsupported?

    else
      # Handle postback failure
      # failed
    end

  end

end