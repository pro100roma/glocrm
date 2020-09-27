<template>
    <div class="settings">
        <h2>Settings</h2>
         <div class="row">
            <div class="input-field col s6">
                <input value="John" id="name" type="text" class="validate">
                <label class="active" for="name">John</label>
            </div>
            <div class="input-field col s6">
                <input value="Doe" id="last_name" type="text" class="validate">
                <label class="active" for="last_name">Last Name</label>
            </div>
        </div>
        <div class="row">
            <div class="input-field col s6">
                <i class="material-icons prefix">public</i>
                <input type="text" id="autocomplete-input" class="autocomplete">
                <label for="autocomplete-input">Country</label>
            </div>
            <div class="input-field col s6">
                <input value="email@email.com" id="email" type="text" class="validate">
                <label class="active" for="email">Email</label>
            </div>
        </div>
        <div class="row">
            <div class="input-field col s12">
                <label>Date of Birth</label>
                <input type="text" class="datepicker">
            </div>
        </div>
         <div class="row">
            <div class="input-field col s12">
                Get email notifications
                <div class="switch">
                    <label>
                    Off
                    <input type="checkbox">
                    <span class="lever"></span>
                    On
                    </label>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="input-field col s12">
                <button class="btn waves-effect waves-light" type="submit" name="action">Submit
                    <i class="material-icons right">send</i>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'settings',
    data: () => ({
        options: {
            data: {
                'England': null,
                'Poland': null,
                'UK': null,
                'Ukraine': null,
            }
        }
    }),
    mounted() {
        window.M.updateTextFields();
        let elems = document.querySelectorAll('.autocomplete');
        window.M.Autocomplete.init(elems, this.options);

        let datepick = document.querySelectorAll('.datepicker');
        window.M.Datepicker.init(datepick);
    }
}
</script>