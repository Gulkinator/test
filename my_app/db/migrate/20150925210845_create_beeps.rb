class CreateBeeps < ActiveRecord::Migration
  def change
    create_table :beeps do |t|
      t.string :from
      t.text :body
      t.string :timestamps

      t.timestamps null: false
    end
  end
end
