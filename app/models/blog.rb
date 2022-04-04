class Blog < ApplicationRecord
  belongs_to :user
  has_rich_text :detail 
  validates :title, :detail, presence: true
end
