<template>
    <div>
        <form>
            <table>
                <tr>
                    <th></th>
                    <th>Weight</th>
                    <th>Arm</th>
                    <th>Moment</th>
                </tr>
                <tr v-for="item in params">
                    <td><h3>{{ item.name }}</h3></td>
                    <td>
                        <input type="text" :name="item.name + `Weight`" id="">
                    </td>
                    <td>
                        <input type="text" :name="item.name + `Arm`" id="">
                    </td>
                    <td>
                        <input type="text" :name="item.name + `Moment`" id="">
                    </td>
                </tr>
            </table>
        </form>
    </div>
</template>

<script>
export default {
    name: 'Calculator',
    data() {
        return {
            params: [
                {
                    name: 'Aircraft',
                    weight: 0,
                    arm: 0,
                    moment: 0
                },
                {
                    name: 'Fuel',
                    weight: 0,
                    arm: 0,
                    moment: 0
                },
                {
                    name: 'Seating Row 1',
                    weight: 0,
                    arm: 0,
                    moment: 0
                }
            ]
        }
    }
}
</script>