# Forklift-Next

Early project for learning basics of Javascript, Sass, React, NextJs</br>
*Styles are based on a forklift work application*

## Instructions:
https://forklift-next.vercel.app/

Live Demo:
1. Select the input labeled "Badge Id:", type in one of three ids (123, 234, 345) and press enter on your keyboard</br>
(If a keyboard is not available, select the green button with the icon of a keyboard)

2. Once logged in you will be prompted with the current name of the account, select "Yes" to continue or select "No" to go back</br>
(If you select device setup, the next screen will open the device settings, these settings can be changed and saved to the DB)

3. After selecting "Yes" you will be prompted with your forklift details, to continue first clear the preset weight by hitting "Zero Scale"</br>
(The button labeled "Scale Not Working" is meant to continue without resetting the scale, this is not enabled as there is no scale device connected)

4. Once you have cleared the scale, select the "Yes" button to continue</br>
(Selecting "No" will alert you to clear the scale before continuing)

6. Finishing inspection will bring you to the Nav page where you can request a trailer ("Retry"), search for freight/trailer ("Live Green Sheet"), enter a product number manually ("MANUAL PRO ENTRY")

5. Select the "MANUAL PRO ENTRY" button and input one of the four provided product numbers then press enter</br>
(The "Manual Pro" button will bring you back to the product number keypad, and the button "Previous Pro" will prompt you with previous product numbers you have input during this demo)

6. Once a product number is entered you will be prompted with the product details, this allows changing handling units tendered (HU), and total weight of the shipment

7. Add some weights by selecting the button "Random Weight" and change the HU with the arrow keys in the bottom left, then hit "Capture", this will add the current weight and total HU's of that weight set</br>
(To remove weights captured, use the arrow buttons on the right to select the weight desired to delete (highlighted in yellow) and hit "Delete selected", the button "Abort All" will delete all captured weights for this shipment)

8. After capturing some new weights for this shipment, hit the button labeled "Complete" to continue</br>
(Selecting DMS with skip the weighing portion if needed)

9. You will now be prompted with the shipper information and three buttons for placment of the shipment</br>
(the button "Reweigh" will bring you back to the product details)

10. Select either "Load it" to load it into a trailer or "Dock it" to dock it into a bay location</br>
(The button "Write on" is currently not implemented as this would require actual freight to work correctly)

11. Once Selected, input either a door (30, 50, 70) or bay (1 through 200) and hit enter on the keyboard (or the button "Enter")

12. After the shipment has been assigned a door/dock, this will finalize the life cycle of a shipment, to continue on, select "Get My Assignment" and hit Nav to go back to the Navigation

### Additional Features:
- Keypads have a button labeled "ABC", this allows the user to type using letter characters instead of numbers
- All cancel buttons will go back to the previous page before it by using breadcrumbs

## Future Features:
- Cookie implementation to keep the user logged in
- Device settings changes local area code
- Auto assignment of trailer to unload
- Search for freight docked or loaded onto trailers
- Reportable freight damage and Write on's

## Setup:
```
npm install
```
```
npm run dev
```
Requires a PostgreSQL Database to work as intended </br>

http://localhost:3000
