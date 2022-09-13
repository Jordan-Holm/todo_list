class List < ApplicationRecord
    validates :title, :description, presence: true
end
