# Forklift-Next

Early project for learning basics of Javascript, Sass, React, NextJs

## Instructions:
https://forklift-next.vercel.app/

Demo Live:
1. In the input labeled "Badge Id:" type in one of three ids (123, 234, 345) and press enter on your keyboard</br>
(If a keyboard is not available, select the green button with the icon of a keyboard)

2. Once logged in you will be prompted with the name on the account, select "Yes" to continue or select "No" to go back</br>
(If you select device setup, the next screen will open the device settings, if selected by accident, hit submit to continue)

3. After selecting "Yes" you will be prompted with your device details, to continue you must clear the preset weight by hitting "Zero Scale"</br>
(The button labeled "Scale Not Working" is meant to continue without resetting the scale, this is not enabled as there is no scale device connected)

4. Once you have cleared the scale you can hit the "Yes" button to continue</br>
(Selecting "No" will alert you to clear the scale before continuing and "Logout" with bring you back to the login page)

6. Finishing inspection will bring you to the Nav page where you can request a trailer ("Retry"), search for freight/trailer ("Live Green Sheet"), enter a product number manually ("MANUAL PRO ENTRY")

5. For this demo we will be selecting "MANUAL PRO ENTRY" and input one of the four provided product numbers (123456789, 987654321, 100000000, 222222222) And press enter on your keyboard (or the "Enter" button)
(The "Manual Pro" button will bring you back to the product number keypad, and the button "Previous Pro" will promp you with previous product numbers you have input during this demo)

6. Once a product number is entered you will be prompted with the product details, this allows for changing of handling units (HU), and weight of the entire shipment

7. Add a weight by selecting the button labeled "Random Weight" and change the HU with the arrow keys in the bottom left, then hit "Capture", this will add the current weight and HU's to this shipment</br>
(To remove weights captured, use the arrow buttons on the right to select the weight desired *highlighted in yellow* and hit "Delete selected", "Abort All" will delete all captured weights for this shipment)

8. After inputting a new weight for this shipment, hit the button labeled "Complete" to continue
(Selecting DMS with skip this portion if needed)

9. You will now be prompted with the shipper information and three buttons to place this shipment at a specific location
(the button "Reweigh" will bring you back to the shipment details)

10. Select either "Load it" to load it onto a trailer or "Dock it" to dock it into a bay location
(The button "Write on" is currently not implemented as this would require actual freight)

11. Once Selected, input either a door (30, 50, 70) or bay (1 through 200) and hit enter on the keyboard (or button "Enter")

12. After the shipment has been assigned a door/dock, this will finalize the life cycle of a shipment, to continue on, select "Get My Assignment" and hit Nav

## Additional Features:
- Keypads have a button labeled "ABC", this allows the user to type using letter characters instead of numbers
- All cancel buttons will go back to the previous page before it by using breadcrumbs

## Setup:
```
npm install
```
```
npm run dev
```
Requires a PostgreSQL Database to work as intended </br>

http://localhost:3000
