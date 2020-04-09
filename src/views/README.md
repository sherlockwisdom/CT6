#### SECTIONS
##### LABS
###### FORMAT
- LABEL = ID = -> _TYPE OF FORM FIELD_TYPE OF FORM INPUT_
> ###### e.g
>- Patient's Name and ID = patients_name_and_id = -> _input_text_
```HTML/CSS
<label for="patients_name_and_id"> Patient's Name and ID </label>
<input id="patients_name_and_id" type="text" />
```
###### Section #1 (label 1)
> - Patient's Name and ID = patients_name_and_id = -> _input_text_
> - Date Specimen Received = date_specimen_received = -> _input_date_
> - Received By = received_by = -> _input_text_
> - Lab Registration Number = lab_registration_number = -> _input_text_

###### Section #2 = Smear Microscopy Result = smr (label 2)
- Result 1 = result_1 (label 2a)
> - No AFB seen = [label 2a]-no_afb_seen = -> _input_radio_
> - Scanty = [label 2a]-scanty = -> _input_radio_
> - 1+ = [label 2a]-1_plus = -> _input_radio_
> - 2+ = [label 2a]-2_plus = -> _input_radio_
> - 3+ = [label 2a]-3_plus = -> _input_radio_
> - TB LAMP - Positive = [label 2a]-tb_lamp_positive = -> _input_radio_
> - TB LAMP - Negative = [label 2a]-tb_lamp_negative = -> _input_radio_
> - Not Done = [label 2a]-not_done = -> _input_radio_

- Result 2 = result_2 (label 2b)
> - No AFB seen = [label 2b]-no_afb_seen = -> _input_radio_
> - Scanty = [label 2b]-scanty = -> _input_radio_
> - 1+ = [label 2b]-1_plus = -> _input_radio_
> - 2+ = [label 2b]-2_plus = -> _input_radio_
> - 3+ = [label 2b]-3_plus = -> _input_radio_
> - TB LAMP - Positive = [label 2b]-tb_lamp_positive = -> _input_radio_
> - TB LAMP - Negative = [label 2b]-tb_lamp_negative = -> _input_radio_
> - Not Done = [label 2b]-not_done = -> _input_radio_ = -> _input_radio_

> - Date = [label 2]-date = -> _input_date_
> - Done By = [label 2]-done_by = -> _input_text_

###### Section #3 = Xpert MTB/RIF Assay (label 3)
- MTB Result = mtb_result (label 3a)
> - Detected = [label 3a]-detected = -> _input_radio_
> - Trace = [label 3a]-trace = -> _input_radio_
> - Not Detected = [label 3a]-not_detected = -> _input_radio_
> - Error/Invalid = [label 3a]-error_invalid = -> _input_radio_
> - Not Done = [label 3a]-not_done = -> _input_radio_

- Grades = grades (label 3b)
> - High = [label 3b]-high = -> _input_radio_
> - Medium = [label 3b]-medium = -> _input_radio_
> - Low = [label 3b]-low = -> _input_radio_
> - Very Low = [label 3b]-very_low = -> _input_radio_

- RIF Result rif_result (label 3c)
> - Detected = [label 3c]-detected = -> _input_radio_
> - Indeterminate = [label 3c]-indeterminate = -> _input_radio_
> - Not Detected = [label 3c]-not_detected = -> _input_radio_
> - Not Done = [label 3c]-not_done = -> _input_radio_

> - Date = [label 3]-date = -> _input_date_
> - Done By = [label 3]-done_by = -> _input_text_

###### Section #4 = Urine LF-LAM = urine_lf_lam (label 4)
> - Negative = [label 4]-negative = -> _input_radio_
> - Positive = [label 4]-positive = -> _input_radio_
> - error_invalid = [label 4]-error_invalid = -> _input_radio_
> - Not Done = [label 4]-not_done = -> _input_radio_

> - Date = [label 4]-date = -> _input_date_
> - Done By = [label 4]-done_by = -> _input_text_
