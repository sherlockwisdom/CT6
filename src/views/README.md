#### SECTIONS

###### FORMAT
- LABEL = ID = -> _TYPE OF FORM FIELD_TYPE OF FORM INPUT_
> ###### e.g
>- Patient's Name and ID = patients_name_and_id = -> _input_text_
```HTML/CSS
<label for="patients_name_and_id"> Patient's Name and ID </label>
<input id="patients_name_and_id" type="text" />
```

##### LABS

###### Section #1 (label 1)
> - Patient's Name and ID = patients_name_and_id = -> _input_text_
> - Date Specimen Received = date_specimen_received = -> _input_date_ | **required**
> - Received By = received_by = -> _input_text_ | **required**
> - Lab Registration Number = lab_registration_number = -> _input_text_ | **required**

###### Section #2 = Smear Microscopy Result = smr (label 2)
- Result 1 = result_1 (label 2a)
> - <b>_input_radio* -> name = result_1_option<b>
> - No AFB seen = [label 2a]-no_afb_seen = -> _input_radio_ | **value=no_afb_seen**
> - Scanty = [label 2a]-scanty = -> _input_radio_ | **value=scanty**
> - 1+ = [label 2a]-1_plus = -> _input_radio_ | **value=1+**
> - 2+ = [label 2a]-2_plus = -> _input_radio_ | **value=2+**
> - 3+ = [label 2a]-3_plus = -> _input_radio_ | **value=3+**
> - TB LAMP - Positive = [label 2a]-tb_lamp_positive = -> _input_radio_ | **value=tb_lamp_positive**
> - TB LAMP - Negative = [label 2a]-tb_lamp_negative = -> _input_radio_ | **value=tb_lamp_negative**
> - Not Done = [label 2a]-not_done = -> _input_radio_ | **value=not_done** | **attribute=default**

- Result 2 = result_2 (label 2b)
> - <b>_input_radio* -> name = result_2_option<b>
> - No AFB seen = [label 2b]-no_afb_seen = -> _input_radio_ : **value=no_afb_seen**
> - Scanty = [label 2b]-scanty = -> _input_radio_ | **value=scanty**
> - 1+ = [label 2b]-1_plus = -> _input_radio_ | **value=1+**
> - 2+ = [label 2b]-2_plus = -> _input_radio_ | **value=2+**
> - 3+ = [label 2b]-3_plus = -> _input_radio_ | **value=3+**
> - TB LAMP - Positive = [label 2b]-tb_lamp_positive = -> _input_radio_ | **value=tb_lamp_positive**
> - TB LAMP - Negative = [label 2b]-tb_lamp_negative = -> _input_radio_ | **value=tb_lamp_negative**
> - Not Done = [label 2b]-not_done = -> _input_radio_ = -> _input_radio_ **value=not_done** | **attribute=default**

> - Date = [label 2]-date = -> _input_date_ | **value=current date and time**
> - Done By = [label 2]-done_by = -> _input_text_ | **value = blank**

###### Section #3 = Xpert MTB/RIF Assay = xpert (label 3)
- MTB Result = mtb_result (label 3a)
> - <b>_input_radio* -> name = mtb_option<b>
> - Detected = [label 3a]-detected = -> _input_radio_ | **value=detected**
> - Trace = [label 3a]-trace = -> _input_radio_ | **value=trace**
> - Not Detected = [label 3a]-not_detected = -> _input_radio_ | **value=not_detected**
> - Error/Invalid = [label 3a]-error_invalid = -> _input_radio_ | **value=error_invalid**
> - Not Done = [label 3a]-not_done = -> _input_radio_ | **value=not_done** | **attribute=default**

- Grades = grades (label 3b)
> - <b>_input_radio* -> name = grade_option<b>
> - High = [label 3b]-high = -> _input_radio_ | **value=high**
> - Medium = [label 3b]-medium = -> _input_radio_ | **value=medium**
> - Low = [label 3b]-low = -> _input_radio_ | **value=low**
> - Very Low = [label 3b]-very_low = -> _input_radio_ | **value=very_low**
> - N_A = [label 3b]-n_a = -> _input_radio_ | **value=""**| **attribute= default, hidden**

- RIF Result = rif_result (label 3c)
> - <b>_input_radio* -> name = rif_result_option<b>
> - Detected = [label 3c]-detected = -> _input_radio_ | **value=detected**
> - Indeterminate = [label 3c]-indeterminate = -> _input_radio_ | **value=indeterminate**
> - Not Detected = [label 3c]-not_detected = -> _input_radio_ | **value=not_detected**
> - Not Done = [label 3c]-not_done = -> _input_radio_ | **value=not_done** | **attribute=default**

> - Date = [label 3]-date = -> _input_date_ | **value=current date and time**
> - Done By = [label 3]-done_by = -> _input_text_ | **value=blank**

###### Section #4 = Urine LF-LAM = urine_lf_lam (label 4)
> - <b>_input_radio* -> name = lf_lam_option<b>
> - Negative = [label 4]-negative = -> _input_radio_ | **value=negative**
> - Positive = [label 4]-positive = -> _input_radio_ | **value=positive**
> - Error/Invalid = [label 4]-error_invalid = -> _input_radio_ | **value=error_invalid**
> - Not Done = [label 4]-not_done = -> _input_radio_ | **value=not_done** | **attribute=default**

> - Date = [label 4]-date = -> _input_date_ | **value=current date and time**
> - Done By = [label 4]-done_by = -> _input_text_ | **value = blank**


##### Edit information

###### Section #1 (label 1)
> - ID = patient_id = -> _input_text_ | **disabled**
> - Name = patient_name -> _input_text_
> - Age = patient_age -> _input_number_
> - Telephone = tel_one -> _input_number_
> - Telephone 2 = tel_two -> _input_number_
> - Gender = patient_gender -> _select_ | options -> male , female
> - Date of test request = test_request_date -> _input_text_ | **disabled**
> - Address = patient_address -> _input_text_ | **disabled**
> - ART = patient_art -> _input_text_  | **disabled**
> - Status = status -> _input_text_ | **disabled**
> - Symptoms = symptoms -> _input_text_ | **disabled**
> - Region = region -> _input_text_ | **disabled**
> - Site = site -> _input_text_ | **disabled**
> - Patient Category = patient_category -> _input_text_ | **disabled**
> - Reason for test = reason_for_test -> _input_text_ |  **disabled**
> - TB Treatment History = tb_treatment_history -> _input_text_ | **disabled**
> - button -> _input_submit_ | value = save changes


##### Specimen Collection

###### Section #1 (label 1)
- container area = status_container -> _div_
###### Section #2 = [patient_name][patient_id] | (label 2)
- Date = "date" -> _input_date_
- Specimen Type = specimen_type (label 2a)
> - <b>_input_radio* -> name = specimen_option<b>
> - Sputum = [label 2a]_sputum -> _input_radio_ |**value=sputum** | **attribute="default"**
> - CSF =[label 2a]_csf -> _input_radio_ | **value="CSF"**
> - Lymph node aspirate = [label 2a]_LNA | **value="LNA"**
> - Gastric aspirate  = [label 2a]_gastric_aspirate | **value="gastric_aspirate"**
> - Urine = [label 2a]_urine | **value="urine"**
> - Other = [label 2a] other | **value="other"**
> - <b>NO label</b> = other_option -> _input_text_ | **value="Enter Other/ Entrez Autre"**


> - <b>_input_radio* -> name = sputum_option<b>
> - spot = [label 2a]_sputum_spot -> _input_radio_ | **value="spot"** | **attribute="default"**
> - Morning = [label 2a]_sputum_morning -> _input_radio_ | **value="morning"**
> - Mucopurulent = [label 2a]_sputum_mucopurulent -> _input_radio_ | **value="mucopurulent"**
> - Bloody = [label 2a]_sputum_bloody -> _input_radio_ | **value="bloody"**
> - Salivary = [label 2a]_sputum_salivary -> _input_radio_ | **value="salivary"**
> - N/A = [label 2a]_sputum_NA -> _input_radio_ | **value="N/A"**

> - Received by = received_by -> _input_text_
> - button -> _input_submit_ | value = save


##### Follow Up

###### Section #1 = Very Inportant Alert! -> modal  (label 1)
- message -> _h2_ | **value="No Lab Results Recorded"
- button -> _input_submit_ | **value="Navigate Patient"**
###### Section #2 (label 2)
- container area = follow_up_status_container -> _div_
> - Lab Results(click here) = lab_result -> _link_ | **attribute="toggle"**
> - container area = lab_result_details -> _div_
>> - heading -> h3 | **value ="SMR Results"**
>> - text -> Result 1: | **value="[result_1_option]"**
>> - text -> Result 2: | **value="[result_2_option]"**

>> - heading ->  h3 | **value="Xpert results"**
>> - text -> MTB : | **value="[mtb_option]"**
>> - text -> Grade : | **value="[grade_option]"**
>> - text -> RIF : | **value="[rif_result_option]"**

>> - heading -> h3 | **value="Urine results"**
>> - text -> Result: | **value="[lf_lam_option]"**

- Patients name and ID = patients_name_and_id -> _input_text_ | **attribute="disabled"**  **value="[patients_name_and_id]"**

###### Section #3 (label 3)

- X-RAY = x_ray -> _input_checkbox_ | **value="x_ray"**
- Amoxicillin Prescribed = amoxicillin_prescribed -> _input_checkbox_ | **value="amoxicillin_prescribed"**
- Other Antibiotic = other_antibiotic -> _input_text_
- Follow_up Scheduled Date = follow_up_scheduled_date -> _input_date_
- comments = comments -> _textarea_ | **row_number="4"**

###### Section #4 (label 4)
- text -> **value="Good Job"**
- text -> **value="Review Everything and click record**
- button -> _input_submit_ | **value="Record"**


##### Outcome Recorded

###### Section #1 = Very Inportant Alert! -> modal  (label 1)
- message -> _h2_ | **value="No Lab Results Recorded"
- button -> _input_submit_ | **value="Navigate Patient"**
###### Section #2 (label 2)
- container area = follow_up_status_container -> _div_
> - Lab Results(click here) = lab_result -> _link_ | **attribute="toggle"**
> - container area = lab_result_details -> _div_
>> - heading -> h3 | **value ="SMR Results"**
>> - text -> Result 1: | **value="[result_1_option]"**
>> - text -> Result 2: | **value="[result_2_option]"**

>> - heading ->  h3 | **value="Xpert results"**
>> - text -> MTB : | **value="[mtb_option]"**
>> - text -> Grade : | **value="[grade_option]"**
>> - text -> RIF : | **value="[rif_result_option]"**

>> - heading -> h3 | **value="Urine results"**
>> - text -> Result: | **value="[lf_lam_option]"**

- Patients name and ID = patients_name_and_id -> _input_text_ | **attribute="disabled"**  **value="[patients_name_and_id]"**

###### Section 3 (label 3)

> - Started TB Treatment = started_tb_treatment -> _input_radio_ | **value="started_tb_treatment"**
> - Referred for treatment = referred_for_treatment -> _input_radio | **value="referred_for_treatment"**
> - Patient improved, Unlikely TB = patient_improved -> _input_radio | **value="patient_improved"**
> - Lost Patient to follow up = lost_patient -> _input_radio_ | **value="lost_patient"**
> - other = other -> _input_radio_ | **value="other"**


> - Other = other_option -> _input_text_
> - Comments = comments -> _textarea_ | **row_size ="4"**

###### Section 4 (label 4)

> - container area = requester_details -> _div_
>> - text-bold | heading -> Username : **value="[user.name]"**
>> - text-bold | heading -> Phonenumber : **value="[user.phonenumber]"**
>> - button -> _input_submit_ | **value="Not my accoutn"**

###### Section #5 (label 5)
- text -> **value="Good Job"**
- text -> **value="Review Everything and click record**